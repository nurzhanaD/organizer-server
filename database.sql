create TABLE user_info(
    user_id VARCHAR(250) PRIMARY KEY UNIQUE,
    email VARCHAR(250) UNIQUE,
    _password VARCHAR(250) NOT NULL,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    profile_image VARCHAR(450),
    goals VARCHAR[],
    journal VARCHAR[],
    notes VARCHAR[],
    to_do_s VARCHAR[]
);

create TABLE goal(
    goal_id VARCHAR(250) PRIMARY KEY,
    which VARCHAR(250),
    why VARCHAR(250),
    how VARCHAR(250),
    _when VARCHAR(250),
    _type VARCHAR(250),
    comment VARCHAR(450),
    _date VARCHAR(250),
    user_id VARCHAR(250)
);

create TABLE to_do(
    to_do_id VARCHAR(250) PRIMARY KEY,
    to_do_content VARCHAR(100),
    is_completed BOOLEAN NOT NULL,
    _date VARCHAR(250),
    user_id VARCHAR(250)
);

create TABLE note(
    note_id VARCHAR(250) PRIMARY KEY,
    note_content TEXT,
    _date VARCHAR(250),
    user_id VARCHAR(250)
);

create TABLE journal(
    journal_id VARCHAR(250) PRIMARY KEY,
    time_on_work VARCHAR(250),
    time_on_rest VARCHAR(250),
    when_easy VARCHAR(250),
    most_time VARCHAR(250),
    pleased BOOLEAN,
    my_day TEXT(450),
    _date VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY user_id REFERENCES user_info (user_id)
);

create TABLE history(
    history_id VARCHAR(250),
    _date DATE,
    FOREIGN KEY _date REFERENCES user_info (_date)
)