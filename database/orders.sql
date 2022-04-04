CREATE TABLE orders (
  id UUID,
  type_id CHAR(1),
  status_id CHAR(1),
  start_date DATE,
  end_date DATE,
  placed_user_id UUID,
  taken_user_id UUID,
  description VARCHAR2(200),
  remark VARCHAR2(100)
);