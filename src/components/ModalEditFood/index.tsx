import { createRef, ReactNode } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import { Modal} from '../Modal/index';
import { Input } from '../Input';
import { FoodType } from '../../model';
import { FormHandles } from '@unform/core/typings/types';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodType;
  handleUpdateFood: (data: FoodType) => void;
}

export function ModalEditFood(props: Props) {

  const formRef = createRef<FormHandles>();
  const handleSubmit = async (data: FoodType) => {
    const { setIsOpen, handleUpdateFood } = props;

    handleUpdateFood(data);
    setIsOpen();
  };

    const { isOpen, setIsOpen, editingFood } = props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
export default ModalEditFood;
