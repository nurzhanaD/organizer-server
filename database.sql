create TABLE user_info(
    user_id VARCHAR(250) PRIMARY KEY,
    email VARCHAR(250) UNIQUE,
    _password VARCHAR(250),
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    profile_image VARCHAR(450),
    goals VARCHAR(250),
    journal VARCHAR(250),
    notes VARCHAR(250),
    to_do_s VARCHAR(250)
);

create TABLE goal(
    goal_id VARCHAR(250) PRIMARY KEY,
    title VARCHAR(250),
    _type VARCHAR(250),
    questions VARCHAR(250),
    answers VARCHAR(250),
    _date VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY user_id REFERENCES user_info (user_id)
);

create TABLE goal_questions(
    question_id VARCHAR(250) PRIMARY KEY,
    question VARCHAR(250),
    goal_id VARCHAR(250),
    FOREIGN KEY goal_id REFERENCES goal (goal_id)
);

create TABLE goal_answers(
    answer_id VARCHAR(250) PRIMARY KEY,
    answer VARCHAR(250),
    goal_id VARCHAR(250),
    FOREIGN KEY goal_id REFERENCES goal (goal_id)
);

create TABLE to_do(
    to_do_id VARCHAR(250) PRIMARY KEY,
    to_do_content VARCHAR(250),
    isCompleted BOOLEAN,
    _date VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY user_id REFERENCES user_info (user_id)
);

create TABLE note(
    note_id VARCHAR(250) PRIMARY KEY,
    note_content TEXT(400),
    _date VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY user_id REFERENCES user_info (user_id)
);

create TABLE journal(
    journal_id VARCHAR(250) PRIMARY KEY,
    questions VARCHAR(250)
    answers VARCHAR(250),
    _date VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY user_id REFERENCES user_info (user_id)
);

create TABLE journal_questions(
    question_id VARCHAR(250) PRIMARY KEY,
    question VARCHAR(250),
    journal_id VARCHAR(250),
    FOREIGN KEY journal_id REFERENCES journal (journal_id)

);

create TABLE journal_answers(
    answer_id VARCHAR(250) PRIMARY KEY,
    answer VARCHAR(250),
    journal_id VARCHAR(250),
    FOREIGN KEY journal_id REFERENCES journal (journal_id)
);