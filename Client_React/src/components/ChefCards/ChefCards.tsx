import ChefCard from "../ChefCard/ChefCard.tsx";
import React, { memo, useEffect, useMemo, useState } from "react";
import { EmployeeType } from "../../entities/employee.entity.ts";
import { request } from "../../services/axios/axios.ts";
import { EmployeeRoles } from "../../enum/employeeRoles.enum.ts";

const ChefCards = (): React.ReactNode => {
  const [chefs, setChefs] = useState<EmployeeType[]>([]);

  const getChefs = async (): Promise<void> => {
    const response = await request.GETALL<EmployeeType[]>({
      url: "/employees",
      cache: {
        key: "chefCards-component-unique-key",
      },
      configs: {
        params: {
          roles: [EmployeeRoles.HEAD_CHEF, EmployeeRoles.CHEF],
          limit: 4,
          page: 1,
        },
      },
    });

    setChefs(response.data.data);
  };

  useEffect(() => {
    getChefs();
  }, []);

  const memoChefs: JSX.Element[] = useMemo(() => {
    return chefs.map((card) => <ChefCard key={card.id} {...card} />);
  }, [chefs]);
  return (
    <div className="grid justify-center grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 my-10 sm:my-20">
      {memoChefs}
    </div>
  );
};

export default memo(ChefCards);
