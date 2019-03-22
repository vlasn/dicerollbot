// Description:
//  Improbot gives you information about upcoming improvised theatre shows
//  using improvision.eu as the data source
//
// Dependencies:
//   "moment": "2.24"
//
// Configuration:
//   NO_ENV_VARS_NEEDED
//
// Commands:
//   hubot get schedule - List upcoming improv events
//   hubot show <ID> - Get information about a specific show
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   @SQRooted
const moment = require('moment');
moment.locale('et');

// Helper function to format dates
formatDate = function (dateString) {
  let time = moment(dateString);
  return time.format('DD MMMM HH:mm');
};

module.exports = robot => {

  // Whenever someone sends 'improbot get schedule', the robot will respond
  // with a list of upcoming improv events
  robot.respond(/get schedule/i, function (res) {
    robot.logger.debug('Fetching improv events...');

    // HTTP call to an external API to get the info
    return robot.http("https://api.improvision.eu/v1/events/schedule")
      .get()((err, httpRes, body) => {

        // JSON API-s are easy to consume
        let data = JSON.parse(body).data;
        let schedule = "";
        schedule += "Here is the latest improvised theatre schedule from https://improvision.eu<<Improvision.eu>>.\n\n"

        // Build the response message, one event at the time
        data.forEach(function (entry) {
          schedule += "- `" + entry.uid + "` " + formatDate(entry.times.start) + " " + entry.production.title + "\n";
        });

        schedule += "\nFor more info about a show, use `improbot show <UID>`";
        return res.send(schedule);
      });
  });

  // Get info about a specific show, by show ID. We use regex and capture groups to get the show ID into a var
  robot.respond(/show (.*)/i, function (res) {
    return robot.http("https://api.improvision.eu/v1/events/schedule")
      .get()((err, httpRes, body) => {

        let data = JSON.parse(body).data;
        data.forEach(function (entry) {

          // Skip everything, except the show the user asked for
          if (entry.uid === res.match[1]) {
            let link = 'https://improvision.eu/#/events/'+entry.uid+'<<Open event page>>';
            return res.send('*' + entry.production.title + "*\n\n" + entry.production.description + "\n\n" +link);
          }
        });
      });
  });

};
