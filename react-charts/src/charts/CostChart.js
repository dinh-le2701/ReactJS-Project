import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    { month: 'Jan', electricity: 120, water: 30, rent: 500, service: 50 },
    { month: 'Feb', electricity: 130, water: 28, rent: 500, service: 60 },
    { month: 'Mar', electricity: 125, water: 35, rent: 500, service: 55 },
    { month: 'Apr', electricity: 140, water: 33, rent: 500, service: 65 },
    // Add data for other months...
];

const filterDataByType = (type) => {
    return data.map((entry) => ({
        month: entry.month,
        cost: entry[type]
    }));
};

export const CostChart = () => {

    const [filter, setFilter] = useState('all'); // Trạng thái để lưu loại chi phí được lọc

    const handleFilterChange = (type) => {
        setFilter(type);
    };

    const filteredData = filter === 'all'
        ? data
        : filterDataByType(filter);

    return (
        <div>
            <div>
                <button onClick={() => handleFilterChange('all')}>Tất cả</button>
                <button onClick={() => handleFilterChange('electricity')}>Tiền điện</button>
                <button onClick={() => handleFilterChange('water')}>Tiền nước</button>
                <button onClick={() => handleFilterChange('rent')}>Tiền phòng</button>
                <button onClick={() => handleFilterChange('service')}>Dịch vụ</button>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {filter === 'all' ? (
                        <>
                            <Line type="monotone" dataKey="electricity" stroke="#8884d8" />
                            <Line type="monotone" dataKey="water" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="rent" stroke="#ffc658" />
                            <Line type="monotone" dataKey="service" stroke="#ff7300" />
                        </>
                    ) : (
                        <Line type="monotone" dataKey="cost" stroke="#8884d8" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
