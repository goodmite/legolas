export interface IEnvironment {
  "__v": 0,
  "updatedAt": "2019-04-04T23:42:41.566Z",
  "createdAt": "2019-04-04T23:42:41.566Z",
  "userID": "5ca4654137d956001d6e96d4",
  "name": "ayessadasdahenv1",
  "_id": "5ca69671ccfcd0001d91038b",
  "docker_file": "FROM ubuntu:18.04\nLABEL maintainer='Abhishek <abhishek.k@imimobile.com>'\nRUN apt-get update\nRUN apt-get install -y apt-transport-https\nRUN apt-get install -y --fix-missing python3 python3-dev python3-pip\nRUN apt-get install -y git\n\n\n#RUN git clone https://abhishek_kanni:26-01-1951@bitbucket.org/abhishek_kanni/modular-ai-test.git\n\n\nRUN apt-get install -y libicu-dev\nRUN pip3 install flask ",
  "desired_count": 1,
  "min_server_count": 1,
  "max_server_count": 1,
  "vcpu": 256,
  "memory": 512,
  "description": "sdf"
}