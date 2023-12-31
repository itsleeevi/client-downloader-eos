const express = require("express");
const path = require("path");
const request = require("request");
const axios = require("axios");
const cors = require("cors");

const PORT = 3003;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const port = process.env.PORT || PORT;

app.get("/client.zip", async (req, res) => {
  const remoteUrl =
    "https://my.microsoftpersonalcontent.com/personal/669232733acca0ac/_layouts/15/download.aspx?UniqueId=eac5388b-b380-438c-8ea2-39aef340f621&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjkyOTIyODA0IiwiZXhwIjoiMTY5MjkyNjQwNCIsImVuZHBvaW50dXJsIjoiWGZGaWxOdmZFckpEbnpvUDhad25nZjdnS2VNNHFRYy9BVGFZYWZIbXNvcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MyIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoib05QRHpTVEFBSEFNeDBCMzg0YkNnUT09IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik9ESmxOelJqWlRRdE9UQXpPUzAwTmpBMExUbGtPV0V0T0RObU5qY3hZemM0T0RZNSIsImFwcF9kaXNwbGF5bmFtZSI6IkNvbnN1bWVyIEFwcDogMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0IiwiYXBwaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwNDgxNzEwYTQiLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJ1cG4iOiJsZXZlbnRla2Vjc2tlbWV0aUBnbWFpbC5jb20iLCJwdWlkIjoiMDAwM0JGRkRDQzhFQzA0RiIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDAwMDNiZmZkY2M4ZWMwNGZAbGl2ZS5jb20iLCJzY3AiOiJhbGxzaXRlcy5mdWxsY29udHJvbCIsInNpZCI6IjY2MTk4OTYwMTU5OTcxMDAzMzciLCJ0dCI6IjIiLCJpcGFkZHIiOiI1Mi4xMDUuNDYuMTU3In0.AVaTGtiOV_HHcwsqWuZO9Fcrnh52YSPJ1EcLhSeXyR8&ApiVersion=2.0&AVOverride=1"; // truncated for brevity

  try {
    const { data } = await axios({
      method: "GET",
      url: remoteUrl,
      responseType: "stream",
    });

    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=client.zip");
    data.pipe(res);
  } catch (error) {
    console.error("Error fetching the file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/Empire_of_Sight_Launcher_Installer.exe", async (req, res) => {
  const remoteUrl =
    "https://my.microsoftpersonalcontent.com/personal/669232733acca0ac/_layouts/15/download.aspx?UniqueId=d556c0cf-758f-4fca-9e34-67e35b02f807&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjkyOTIyODQ2IiwiZXhwIjoiMTY5MjkyNjQ0NiIsImVuZHBvaW50dXJsIjoicmxyc1VrcVFhalAwakg3V0JraEo4RHNpZUc0S25ZMUxhcEFyZDczeXlwUT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE1MyIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoib05QRDF6L0FBSEFNeDBidDBrekNIdz09IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik9ESmxOelJqWlRRdE9UQXpPUzAwTmpBMExUbGtPV0V0T0RObU5qY3hZemM0T0RZNSIsImFwcF9kaXNwbGF5bmFtZSI6IkNvbnN1bWVyIEFwcDogMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0IiwiYXBwaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwNDgxNzEwYTQiLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJ1cG4iOiJsZXZlbnRla2Vjc2tlbWV0aUBnbWFpbC5jb20iLCJwdWlkIjoiMDAwM0JGRkRDQzhFQzA0RiIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDAwMDNiZmZkY2M4ZWMwNGZAbGl2ZS5jb20iLCJzY3AiOiJhbGxzaXRlcy5mdWxsY29udHJvbCIsInNpZCI6IjY2MTk4OTYwMTU5OTcxMDAzMzciLCJ0dCI6IjIiLCJpcGFkZHIiOiI1Mi4xMDUuNDYuMTU5In0.ooaHZz2kmv4Gjf0QWX2lP9ibjhViHfAfzDBzvsOnJGE&ApiVersion=2.0&AVOverride=1"; // truncated for brevity

  try {
    const { data } = await axios({
      method: "GET",
      url: remoteUrl,
      responseType: "stream",
    });

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Empire_of_Sight_Launcher_Installer.exe"
    );
    data.pipe(res);
  } catch (error) {
    console.error("Error fetching the file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log("server running on port 3003");
});
