
var config = {
    name: 'Mist',
};

// change for wallet
if(global.mode === 'wallet') {
    config.name = 'Expanse Wallet';
}

module.exports = config;