const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'ec2-3-226-134-153.compute-1.amazonaws.com',
    username: 'kmnzckzvdxfobw',
    port: 5432,
    database: 'd9gt4qieavduc4',
    password: '31d608881eb7e29af61821a6c07ac7f294059fd304f2f48b0e8f78779efcbc32'
});

module.exports = sequelize;