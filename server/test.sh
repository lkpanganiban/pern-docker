#!/usr/bin/bash

# curl -H 'Content-type: application/json' -X POST http://localhost:3001/users -H "Content-Type: application/json" -d '{"first_name":"John", "last_name":"Doe","email":"john.doe@example.com", "password": "mypassword1234"}'
curl -H 'Content-type: application/json' -X POST http://localhost:3001/users/login -H "Content-Type: application/json" -d '{"email":"john.doe@example.com", "password": "mypassword1234"}'


curl -H 'Content-type: application/json' -H "Authorization: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxMzE0OTcwNX0.eD2GOPp4Yxa9YMdVtCtios6kNq75U2ZxLHUzZV6dZcI" -X GET http://localhost:3001/users/profile