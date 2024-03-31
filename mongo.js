use student_related_data

db.createCollection("acadmic_records")
db.createCollection("co_curricular_activity")

// for acadmic records

db.acadmic_records.insertMany([
    {
        "student_id": 101,
        "name": "Mark",
        "grades": {
            "math": 85,
            "phy": 96,
            "che": 89
        },
        "attendance": 90,
        "contact": {
            "mobile": 3125518128,
            "email": "mark@fb.com"
        },
        "semester": 5

    },
    {
        "student_id": 102,
        "name": "Cris",
        "grades": {
            "math": 95,
            "phy": 90,
            "che": 89
        },
        "attendance": 80,
        "contact": {
            "mobile": 3125518128,
            "email": "cris@google.com"
        },

        "semester": 5
    },
    {
        "student_id": 103,
        "name": "Scarlet",
        "grades": {
            "math": 89,
            "phy": 86,
            "che": 59
        },
        "attendance": 70,
        "contact": {
            "mobile": 314518128,
            "email": false
        },
        "semester": 5

    },
    {
        "student_id": 104,
        "name": "Thor",
        "grades": {
            "math": 83,
            "phy": 71,
            "che": 69
        },
        "attendance": 90,
        "contact": {
            "mobile": 905518128,
            "email": "thor@yahoo.com"
        },
        "semester": 5

    },
    {
        "student_id": 105,
        "name": "John",
        "grades": {
            "math": 75,
            "phy": 66,
            "che": 89
        },
        "attendance": 45,
        "contact": {
            "mobile": 3125518128,
            "email": "john@google.com"
        },
        "semester": 5

    },
])

db.acadmic_records.find({ "student_id": 101 })
db.acadmic_records.updateOne({ "student_id": 102 }, { $set: { "name": "Cris Evans" } })
db.acadmic_records.deleteOne({ "student_id": 105 })


// for co-curriculum

db.co_curricular_activity.insertMany([
    {
        "student_id": 101,
        "name": "Mark",
        "activityType": [
            {
                "activity_name": "Footbal",
                "level": "Enter College Championship"
            },
            {
                "activity_name": "Quiz Competition",
                "level": "College"
            },
            {
                "activity_name": "debate club",
                "level": "Member"
            }
        ],
    },
    {
        "student_id": 102,
        "name": "Cris",
        "activityType": [
            {
                "activity_name": "Basketball",
                "level": "Enter College Championship"
            },
            {
                "activity_name": "Coding Competition",
                "level": "University"
            },

        ],

    },
    {
        "student_id": 103,
        "name": "Scarlet",
        "activityType": [
            {
                "activity_name": "Cricket",
                "level": "Enter College Championship"
            },
            {
                "activity_name": "Quiz Competition",
                "level": "Enter College"
            },
            {
                "activity_name": "Athletic",
                "level": "Enter College Championship"
            }
        ],


    },
])

