import get from './getElement.js'

const loading = get('.loading');

export const showLoading_69 =()=>{
    loading.classList.remove('hide-loading');
}

export const hideLoading =()=>{
    loading.classList.add('hide-loading');
};

