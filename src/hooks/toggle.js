import { ref } from "vue";

export default function useModalToggle(defState = false){
    const isModalOpen = ref(defState);
    const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value;
    };
    return {
        isModalOpen,
        toggleModal
    }
}