const MSGS = {
    UPDATE_LIST: "UPDATE_LIST",
    UPDATE_INPUT: "UPDATE_INPUT",
};


async function update(msg, model) {
    switch (msg) {
      case MSGS.UPDATE_LIST:
        if (model.inputValue) {
            
            const weatherData = await makeOpenWeatherAPICall(model.inputValue);
            const newRow = [
                weatherData.location,
                weatherData.temp,
                weatherData.temp_min,
                weatherData.temp_max,
            ];
  
            const updatedRows = [...model.rows, newRow];
            const updatedModel = {
                ...model,
                location: weatherData.location, 
                temp: weatherData.temp, 
                low: weatherData.temp_min,
                high: weatherData.temp_max,
                rows: updatedRows,
            };
  
          return updatedModel;
        } else {
          return model;
        }
  
      default:
        return model;
    }
  }

module.exports = { MSGS, update };
