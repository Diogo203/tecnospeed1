import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { bank } = req.query;
    try {
      const result = await pool.query(
        'SELECT timestamp, message FROM error_logs WHERE bank = $1 ORDER BY timestamp DESC',
        [bank]
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Erro ao buscar logs:', error);
      res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
