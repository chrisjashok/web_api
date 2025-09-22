import crypto from 'node:crypto';

export function decrypt(encryptedData) {
  const algorithm = process.env.ENC_ALGORITHM;
  const secretKey = Buffer.from(process.env.ENC_SECRETKEY, 'hex'); // 32 bytes for AES-256
  const iv = Buffer.from(process.env.ENC_IV, 'hex');               // 16 bytes for AES

  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
}
