const readline = require('readline');
const fs = require('fs');
const eter = "0";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("You can type 'signup' to create accounts")
rl.question("Please Enter the Usernames : ", methodnya => {
  if(methodnya == "signup") {
    rl.question("Enter your names : ", namadie => {
  if(namadie == "") {
    console.log("at last you have a name")
  } else {
    rl.question("Enter your servers name : ", namaserver => {
      if(namaserver == "") {
        console.log("you need a servers.")
      } else {
    rl.question("Enter your account password : ", paspot => {
      if(paspot == "") {
        console.log("you need a password for your accounts.")
      } else {
      const readline = require('readline');
const fs = require('fs');
const colors = require('colors');
const gradient = require('gradient-string');
// Use the rainbow gradient
// var
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// coding
console.log("account.json Created!")
console.log(gradient.rainbow('AntiDDOS for GrowtopiaServers'))
console.log("Bypass username : FrenzySG");
rl.question("Enter the usernames before countinue : ", UsernameDia => {
  if(UsernameDia == "") {
    console.log("Enter the usernames correctly!")
  } else {
  if(UsernameDia == "FrenzySG") {
rl.question("Enter your ip : ", IPDia => {
  if(IPDia == "") {
    console.log("Cannot protect blank ip!")
  } else {
const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        //req.connection.destroy();
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            res.write(`AntiServersData Reader JSON :
              {
                "servers": "${IPDia}"
              }
              `);
            res.end();
            console.log(`
==================== “NEW CLIENT” =======================
|| [SYSTEM] IP address detected by the system : ${ipAddress}
|| [METHOD] Method detected : “${req.method}”
|| [ROUTE] Route : ${req.url}
|| [ETHERNET] Receive : ${eter} Mbps, ${eter} Kbps, ${eter} GBps
|| [ETHERNET] Send : ${eter} Mbps, ${eter} KBps, ${eter} GBps
|| [C] FrenzySG Anti DDOS for GTPS
======================== “END” ===========================              
              `);
        }
    }
    else {
        res.writeHead(200);
        res.write(`<script>alert('FrenzySG - DoS');</script><pre>The IP (${ipAddress}) Logged in!`);
        res.end();
        //res.destroy();
    }
})
client.listen(80)
console.log(`AntiDDOS Activevated for ${IPDia}`)
// console.log(gradient.rainbow('Logs will be shown below!'))
// end
// console.log(colors.rainbow('Logs will be showen below!'));
  }
})
  }
  }
})
        //console.log("Account Created!")
        console.clear();
        fs.writeFileSync(
        "account.json",
        `// accounts dataBase.
{
  "usernames": "${namadie}",
  "password": "${paspot}",
  "server": "${namaserver}"
} `
        );
      }
    })
      }
    })
  }
    })
  } else {
  if(methodnya == "bypass") {
  rl.question("Enter your ip : ", ipdia => {
    if(ipdia == "") {
      console.log("Cannot Protect Blank Servers")
    } else {
      console.log(`
 {
   "servers": "${ipdia}"
 }
  logs will created like this, write 'N' for cancel, write any key to countinue.
      `)
  rl.question("Are you sure? : ", yakingak => {
    if(yakingak == "N") {
      console.log("Cancelled")
    } else {
    if(yakingak == "n") {
      console.log("Cancelled")
    } else {
    fs.writeFileSync(
    "logs.json",
    `// logs
{
   "servers": "${ipdia}"
}`
    );
      // requirements
const readline = require('readline');
const fs = require('fs');
const colors = require('colors');
const gradient = require('gradient-string');
// Use the rainbow gradient
// var
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// coding
console.log(gradient.rainbow('AntiDDOS for GrowtopiaServers'))
console.log("Bypass username : FrenzySG");
rl.question("Enter the usernames before countinue : ", UsernameDia => {
  if(UsernameDia == "") {
    console.log("Enter the usernames correctly!")
  } else {
  if(UsernameDia == "FrenzySG") {
rl.question("Enter your ip : ", IPDia => {
  if(IPDia == "") {
    console.log("Cannot protect blank ip!")
  } else {
const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        //req.connection.destroy();
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            res.write(`AntiServersData Reader JSON :
              {
                "servers": "${IPDia}"
              }
              `);
            res.end();
            console.log(`
==================== “NEW CLIENT” =======================
|| [SYSTEM] IP address detected by the system : ${ipAddress}
|| [METHOD] Method detected : “${req.method}”
|| [ROUTE] Route : ${req.url}
|| [ETHERNET] Receive : ${eter} Mbps, ${eter} Kbps, ${eter} GBps
|| [ETHERNET] Send : ${eter} Mbps, ${eter} KBps, ${eter} GBps
|| [C] FrenzySG Anti DDOS for GTPS
======================== “END” ===========================              
              `);
        }
    }
    else {
        res.writeHead(200);
        res.write(`<script>alert('FrenzySG - DoS');</script><pre>The IP (${ipAddress}) Logged in!`);
        res.end();
        //res.destroy();
    }
})
client.listen(80)
console.log(`AntiDDOS Activevated for ${IPDia}`)
// console.log(gradient.rainbow('Logs will be shown below!'))
// end
// console.log(colors.rainbow('Logs will be showen below!'));
  }
})
  }
  }
})
    }
    }
  })
    }
  })
  } else {
    console.log("[IDK] Unknown Commands.")
  }
  }
})
