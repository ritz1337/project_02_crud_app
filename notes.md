notes.md
https://lit-shelf-53913.herokuapp.com/


Issues: 
1) Didn't know how to query database for update & delete without hiding id as
an html div

2) Couldn't get materialize modal to work for new opinion input - just refused to pop up, hence bad data entry field.

3) Colors:
Blue: #7986cb
Purple: #9376CB


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
        {
        "User": "user2"
        "Body": "No he will improve, he has experience"
        "Upvotes": 10
        "Downvotes": 4
        }
    ]
}

//Sample data:
{
  "Category": "Sports",
  "Title": "Pep Guardiola",
  "Body": "He should go back",
  "User": "user1",
  "Upvotes": 7,
  "Downvotes": 5,
  "Comments": [
    {
      "User": "user2",
      "Body": "No he will improve",
      "Upvotes": 10,
      "Downvotes": 44
    }
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
