import { ref } from 'vue';

export default function useFormError(timeout = 3000) {
  const error = ref('');
  function setError(msg) {
    error.value = msg;
    setTimeout(() => {
      error.value = '';
    }, timeout);
  }
  return {
    error,
    setError,
  };
}
