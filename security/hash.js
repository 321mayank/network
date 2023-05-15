const bcrypt = require('bcrypt');
const crypto = require('crypto');

const hashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

const cryptoHash = (value) =>{
  const algorithm = 'sha256';
   const secret = "mysecretkey";
   return crypto.createHmac(algorithm, secret).update(value).digest ('hex');

};



module.exports = {
  hashPassword,
  cryptoHash
};
