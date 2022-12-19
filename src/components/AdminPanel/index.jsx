import React,{useState} from 'react'
import { Button, Modal ,Input} from 'antd';
import {AiOutlinePlusSquare} from "react-icons/ai"


const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };




  return (
    <>
    <div className='w-full h-[70vh] border-2 border-black flex flex-col items-center'>
        <div className="Add w-[80%] h-[100px] border-2 border-black flex justify-around items-center">
          <p className='text-3xl font-black'> Add Your Company</p>
          <AiOutlinePlusSquare size={40} className='cursor-pointer' onClick={showModal}/>
        </div>
    </div>



    {/* ===================================== Models ========================= */}
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="w-full h-full">
          <Input type='text' placeholder='Enter Company Name'/>
          <Input type='text' placeholder='Enter Company Starting year'/>
          <Input type='file' placeholder='Enter Company Name'/>
          <Input type='file' placeholder='Enter Company Name'/>
          <Input type='file' placeholder='Enter Company Name'/>
          
          
        </div>
    </Modal>
    </>
  )
}

export default AdminPanel
