CREATE TABLE users (
  id UUID,
  role_id NUMBER,
  phone CHAR(11),
  hashed_password CHAR(60),
  nick_name VARCHAR2(40),
  real_name VARCHAR2(40),
  qq VARCHAR2(12),
  avatar_url VARCHAR2(100),
  balance NUMERIC(8, 2),
  credit NUMERIC(2, 1)
);