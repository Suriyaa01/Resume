// src/components/EmployeeTable.js
import React from 'react';
import employeesData from './Employees'; // Import JSON data

const EmployeeTable = () => {
  return (

    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-4 text-center">
                    ID
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Name
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Salary
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Position
                </th>
            </tr>
        </thead>
        <tbody>
        {employeesData.map(employee => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={employee.id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employee.id}
                </th>
                <td class="px-6 py-4 text-center"> {employee.name} </td>
                <td class="px-6 py-4 text-center"> {employee.salary.toLocaleString()} </td>
                <td class="px-6 py-4 text-center"> {employee.position} </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
  );
};
console.log(employeesData)
export default EmployeeTable;
