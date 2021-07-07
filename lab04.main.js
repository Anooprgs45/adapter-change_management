// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev105249.service-now.com/',
  username: 'admin',
  password: 'QzXIKteaBo25',
  serviceNowTable: 'change_request',
};


// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get((data, error) => {
        if (error) {
            console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
        }
        if (data.body) {
                var response = JSON.parse(data.body);
                console.log("response: " , response);
                var jsonArray = []
                for (let i = 0; i < response.result.length; i++) {
                    console.log(response.result[i].number);
                    jsonArray.push({
                        "change_ticket_number": response.result[i].number,
                        "active": response.result[i].active,
                        "priority": response.result[i].priority,
                        "description": response.result[i].description,
                        "work_start": response.result[i].work_start,
                        "work_end": response.result[i].work_end,
                        "change_ticket_key": response.result[i].change_ticket_key
                    })
                }
                // return jsonArray
                console.log("my jsonArray: ", jsonArray)
            }
    });
    connector.post((data, error) => {
        if (error) {
            console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
        }
              if (data.body) {
                var response = JSON.parse(data.body);
                console.log(response);
                var jsonObject = {}
                console.log(response.result.number);
                jsonObject; {
                    "change_ticket_number"; response.result.number,
                    "active"; response.result.active,
                    "priority"; response.result.priority,
                    "description"; response.result.description,
                    "work_start"; response.result.work_start,
                    "work_end"; response.result.work_end,
                    "change_ticket_key"; response.result.change_ticket_key
                }
                // console.log(jsonObject)
                //console.log(jsonObject) = JSON.stringify(data);
                // return jsonObject
                console.log(jsonObject)
            }

        // console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
    });

}

// Call mainOnObject to run it.
mainOnObject();