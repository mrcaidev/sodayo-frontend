import { BackendError } from "errors/backend";
import { Pool, types } from "pg";

// Client pool.
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Type parser.
types.setTypeParser(types.builtins.NUMERIC, val => val && Number(val));
types.setTypeParser(types.builtins.TIMESTAMPTZ, val => val && new Date(val));

/**
 * Run command in PostgreSQL database, including SELECT, INSERT, UPDATE, DELETE, etc.
 * @param command A PostgreSQL command string.
 * @param values Parameters to be substituted into the command.
 * @returns Result of the command.
 * @throws `BackendError` 503.
 */
export async function runSQL<T>(command: string, values?: any) {
  try {
    return pool.query<T>(command, values);
  } catch (e) {
    console.error(e);
    throw new BackendError(503, "服务器异常，请稍后再试");
  }
}
