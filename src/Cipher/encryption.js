import crypto from 'node:crypto';

export function encrypt(params) {
    const algorithm = process.env.ENC_ALGORITHM;
    const secretKey =  Buffer.from(process.env.ENC_SECRETKEY , 'hex'); // You should store this securely (e.g., in env vars)
    const iv =  Buffer.from(process.env.ENC_IV , 'hex'); // Initialization vector

    const jsonData = JSON.stringify(params);

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(jsonData, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
    };
}