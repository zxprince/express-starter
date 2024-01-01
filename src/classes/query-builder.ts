import { QueryBuilderOptions } from "../interfaces/query-builder-options";
import mysql from 'mysql2';

export class QueryBuilder {
    private selectClause: string       = '*';
    private whereClauses: string[]     = [];
    private orderByClause: string      = '';
    private limitClause: number | null = null;

    constructor(private options: QueryBuilderOptions) {}

    select(fields: string | string[]): QueryBuilder {
        if (Array.isArray(fields)) {
        this.selectClause = fields.join(', ');
        } else {
        this.selectClause = fields;
        }
        return this;
    }

    where(column: string, operator: string, value: any): QueryBuilder {
        this.whereClauses.push(`AND ${column} ${operator} ${mysql.escape(value)}`);
        return this;
    }

    orderBy(column: string, direction: 'asc' | 'desc' = 'asc'): QueryBuilder {
        this.orderByClause = `ORDER BY ${column} ${direction.toUpperCase()}`;
        return this;
    }

    limit(limit: number): QueryBuilder {
        this.limitClause = limit;
        return this;
    }

    async get(): Promise<any> {
        const { table, connection } = this.options;
        const whereClause           = this.whereClauses.length > 0 ? `WHERE ${this.whereClauses.join(' ').substring(4)}` : '';
        const limitClause           = this.limitClause !== null ? `LIMIT ${this.limitClause}` : '';
        const query                 = `SELECT ${this.selectClause} FROM ${table} ${whereClause} ${this.orderByClause} ${limitClause}`;
        const [results]             = await connection.promise().query(query);
        return results;
    }
}