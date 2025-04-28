import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Transaction from '../configs/Transaction';
import FormDrawer from '../model/views/FormDrawer';
import ListView from '../model/views/ListView';
import Button from '../components/common/Button';

const modelMap = {
    Transaction
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ModelPage = () => {
    const query = useQuery();
    const modelName = query.get('model');
    const modelConfig = modelMap[modelName];

    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const handleSubmit = (formData) => {
        setData(prev => [...prev, formData]);
    };

    if (!modelConfig) {
        return <div>Invalid model</div>;
    }

    return (
        <div className="p-4">
             
            <div className="flex justify-end cursor-pointer">
                <Button onClick={() => setIsOpen(true)}>Add New</Button>
            </div>

            <ListView data={data} />
            <FormDrawer modelConfig={modelConfig} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} />
        </div>
    );
};

export default ModelPage;