notes.md
https://lit-shelf-53913.herokuapp.com/

MongoDB Schema:

Option 1:
Collection Name: opinions
{
    "_id": ObjectId("67868")
    "Category": "Sports"
    "Title": "Pep Guardiola not suited for the EPL"
    "User": "user1"
    "Body": "He should go back to Spain"
    "Upvotes": 7
    "Downvotes": 5
    "Comments": [
        "User": "user2"
        "Body": "No he will improve, he has experience"
        "Upvotes": 10
        "Downvotes: 4"
    ]
}



Option 2:
Two collections:
Users
{
"_id": ObjectId("52543242")
"Name": "User1"
}
Posts
{
     "_id": ObjectId("67868")
    "Category": "Sports"
    "Title": "Pep Guardiola not suited for the EPL"
    "Body": "He should go back to Spain"
    "Upvotes": 7
    "Downvotes": 5
    "Comments": [
        "Body": "No he will improve, he has experience"
        "Upvotes": 10
        "Downvotes: 4"
    ]
}
