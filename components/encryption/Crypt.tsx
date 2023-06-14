

import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';



// AES encryption function
function encryptAES({text, key, iv}:any) {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// AES decryption function
function decryptAES({encryptedText, key, iv}:any) {
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const textToEncrypt = 'Hello, World!';
const encryptionKey = randomBytes(32); // Generate a random 32-byte key
const encryptionIV = randomBytes(16); // Generate a random 16-byte IV

const encryptedText = encryptAES({textToEncrypt, encryptionKey, encryptionIV});
//console.log('Encrypted:', encryptedText);

const decryptedText = decryptAES({encryptedText, encryptionKey, encryptionIV});
//console.log('Decrypted:', decryptedText);
export  {encryptAES,decryptAES};