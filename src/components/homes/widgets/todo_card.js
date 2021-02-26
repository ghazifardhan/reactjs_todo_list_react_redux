import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../redux/actions/delete_todos_action";
import { changeTodo } from "../../../redux/actions/change_todo_status_action";
import { Avatar, Button, Card, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { TodoStatus } from "../../../redux/actions/create_todo_action";
import moment from 'moment';
import './card.scss';
import ImageViewer from 'react-simple-image-viewer';

function TodoCard (props) {

  const dispatch = useDispatch();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([props.item.imageUrl]);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = useCallback(() => {
    setIsViewerOpen(false);
  }, []);

  return (
  <Card
    style={{
      marginBottom: 10,
      borderRadius: 4
    }}>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={0}
          onClose={closeImageViewer}
        />
      )}
      <Row>
        <Col span={5} onClick={() => openImageViewer()}>
          <Avatar
            src={props.item.imageUrl}
            size={48}
          />
        </Col>
        <Col span={10}>
          <Row>
            <span className="header">
              {props.item.header}
            </span>
          </Row>
          <Row>
            <span className="description">
              {props.item.description}
            </span>
          </Row>
          <Row>
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(changeTodo(props.item));
              }}
              type="primary">
              {
                props.item.status === TodoStatus.DONE 
                  ? "Done"
                  : "This is done"
              }
            </Button>
          </Row>
        </Col>
        <Col span={4}>
          <EditOutlined
            onClick={(e) => {
              e.preventDefault();

              console.log(props);

              props.navigation.push({
                pathname: "/create_edit_todo",
                state: {
                  isEdit: true,
                  item: props.item
                }
              });
            }}
            style={{
              float: 'right'
            }}
          />
        </Col>
        <Col span={4}>
          <DeleteOutlined
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteTodo(props.item.id));
            }}
            style={{
              float: 'right'
            }}
          />
        </Col>
      </Row>
      <div style={{ marginTop: 10 }}/>
      <Row>
        <Col span="24">
          CreatedAt: {
            moment(props.item.createdAt).format("DD MMMM YYYY, H:mma")
          }
        </Col>
      </Row>
      <Row>
        <Col span="24">
          CreatedBy: {props.item.username}
        </Col>
      </Row>
  </Card>
  );
}

export default TodoCard;