import { observer } from 'mobx-react-lite';
import { Button } from '../atoms/Button';
import { Company as CompanyObservable } from '../store/Company';

interface CompanyLoadButtonProps {
  status: 'idle' | 'loading' | 'error';
  onClick: () => void;
}

const CompanyLoadButton = observer(
  ({ status, onClick }: CompanyLoadButtonProps) => (
    <Button disabled={status === 'loading'} onClick={onClick}>
      {status === 'loading' ? 'Loading' : 'Load company data'}
    </Button>
  ),
);

CompanyLoadButton.displayName = 'CompanyLoadButton';

interface CompanyAddEmployeeFormProps {
  addEmployee: (name: string) => void;
}

const CompanyAddEmployeeForm = observer(
  ({ addEmployee }: CompanyAddEmployeeFormProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      addEmployee(formData.get('employee') as string);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label className="flex my-2" htmlFor="new-employee">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            name="employee"
            id="new-employee"
            placeholder="New employee name"
          />
        </label>
      </form>
    );
  },
);

CompanyAddEmployeeForm.displayName = 'CompanyAddEmployeeForm';

interface EmployeeListProps {
  employees: { id: number; name: string }[];
}

const EmployeeList = observer(({ employees }: EmployeeListProps) => {
  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id}>{employee.name}</div>
      ))}
    </>
  );
});

EmployeeList.displayName = 'EmployeeList';

export const Company = observer(
  ({ company }: { company: CompanyObservable }) => {
    return (
      <>
        {company.team.status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <EmployeeList employees={company.team.data} />
        )}
        <CompanyLoadButton
          status={company.team.status}
          onClick={() => company.team.loadData()}
        />
        <CompanyAddEmployeeForm
          addEmployee={(name) => company.team.addEmployee(name)}
        />
      </>
    );
  },
);

Company.displayName = 'Company';
