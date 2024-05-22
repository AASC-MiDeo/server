const config = require('./config');

function checkWarnings(helmet, temperature, sound, gas) {
    let warnings = [];

    if (helmet === 0) {
        warnings.push("Helmet is not worn!");
    }
    if (temperature > config.TEMPERATURE_THRESHOLD) {
        warnings.push(`Temperature exceeded ${config.TEMPERATURE_THRESHOLD}°C!`);
    }
    if (sound > config.SOUND_THRESHOLD) {
        warnings.push(`Sound level exceeded ${config.SOUND_THRESHOLD}dB!`);
    }
    if (gas > config.GAS_THRESHOLD) {
        warnings.push(`Gas concentration exceeded ${config.GAS_THRESHOLD}ppm!`);
    }

    return warnings;
}

module.exports = checkWarnings;
