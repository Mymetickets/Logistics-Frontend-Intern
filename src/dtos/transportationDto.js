import useGenerateId from '../hooks/generateId';

export const createTransportCategoryPayload = () => {
  const gen_id = useGenerateId();
  return {
    id: gen_id,
    name: '',
    description: '',
    status: 'active',
  };
};

export const createTransportModePayload = () => {
  const gen_id = useGenerateId();
  return {
    id: gen_id,
    name: '',
    description: '',
    category: '',
    status: 'active',
  };
};
