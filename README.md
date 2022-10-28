# datenbank_api

## init project:
- npm i
- npm start

<br>

## Examples for using the api

### List all items:
http://"ip":"port"/themes

### List only one item:
http://"ip":"port"/themes/"id"

### Insert one item:
curl -i -X POST -H 'Accept: application/json' -H 'Content-type: application/json' http://"ip":"port"/themes --data '{"title": "title", "description": "desc", "added_by": "name"}'

### Delete one item:
curl -i -X DELETE -H 'Accept: application/json' -H 'Content-type: application/json' http://"host":"port"/themes/"id"