+---------------------------------+
|              Users              |
+---------------------------------+
| + user_id: INT (PK)             |
| + username: VARCHAR             |
| + email: VARCHAR                |
| + password: VARCHAR             |
+---------------------------------+
               |
               | 1
               |
               v *
+---------------------------------+
|             Threads             |
+---------------------------------+
| + thread_id: INT (PK)           |
| + title: VARCHAR                |
| + created_at: DATETIME          |
| + user_id: INT (FK to Users)    |
+---------------------------------+
               |
               | 1
               |
               v *
+---------------------------------+
|             Messages            |
+---------------------------------+
| + message_id: INT (PK)          |
| + content: TEXT                 |
| + created_at: DATETIME          |
| + user_id: INT (FK to Users)    |
| + thread_id: INT (FK to Threads)|
+---------------------------------+
