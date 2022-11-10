import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Flawless Visa`;
	}, [title]);
};

export default useTitle;
