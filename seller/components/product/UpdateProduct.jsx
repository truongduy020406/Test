import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import React, { useContext, useEffect } from "react";
import { DatePicker } from "antd";
import { InputNumber } from "antd";
import moment from "moment/moment";
import { updateProduct } from "@/service/product";
import UploadFile from "../common/Upload";
import { CreateContext } from "@/context/ContextProviderGlobal";
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const colorOptions = ['Trắng', 'Vàng', 'Đỏ', 'Xanh'];
const sizeOptions = ['S', 'M', 'L', 'XL'];
function UpdateProduct({ open, refresh, closeAdd, data, category }) {
  const { loadingStart, loadingEnd } = useContext(CreateContext);
  const [form] = Form.useForm();
  const submit = async (e) => {
    loadingStart()
    const datas = {
      ...e,
      color: JSON.stringify(e.color),
      size: JSON.stringify(e.size),
      Store_id: 1
    }
    try {
      await updateProduct(data.Product_id, datas);
      refresh();
      onCloseAdd();
    } catch (error) {
      console.log(error);
    } finally {
      loadingEnd()
    }
  };
  const onCloseAdd = () => {
    closeAdd();
  };
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        product_name: data.product_name,
        color: data.color,
        size: data.size,
        image: data.image,
        color: data.color,
        price: data.price,
        stock_quantity: data.stock_quantity,
        description: data.description,
        SubCategory_id: data.SubCategory_id
      });
    }
  }, [data]);
  return (
    <Modal
      title="Sửa Sanr Phẩm"
      open={open}
      onCancel={onCloseAdd}
      footer={false}
    >
      <Form onFinish={submit} layout="vertical" form={form}>
          <Form.Item
            label="Tên Sản Phẩm"
            name="product_name"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Ảnh"
            name="image"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <UploadFile />
          </Form.Item>
          <Form.Item
            label="color"
            name="color"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <CheckboxGroup options={colorOptions} />
          </Form.Item>
          <Form.Item
            label="size"
            name="size"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <CheckboxGroup options={sizeOptions} />
          </Form.Item>
          <Form.Item
            label="price"
            name="price"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            label="Số lượng"
            name="stock_quantity"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            label="Thể Loại"
            name="SubCategory_id"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <Select
                size="large"
              style={{ width: 200 }}
              options={category.map((e) => ({
                value: e.Category_id,
                label: e.name,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <div>
            <Button htmlType="submit" type='primary' className="w-full" size="large">
              Update Sản Phẩm
            </Button>
          </div>
        </Form>
    </Modal>
  );
}

export default UpdateProduct;