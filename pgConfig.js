import pg from "pg";

//Создаём пул соединений с сервером.
export const pool = new pg.Pool({connectionString: process.env.DB_URL,
	    ssl: { rejectUnauthorized: false}
})