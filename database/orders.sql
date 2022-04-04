CREATE TABLE orders (
  id UUID,
  type_id NUMBER,
  status_id NUMBER,
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ,
  placed_user_id UUID,
  taken_user_id UUID,
  description VARCHAR2(200),
  remark VARCHAR2(100)
);