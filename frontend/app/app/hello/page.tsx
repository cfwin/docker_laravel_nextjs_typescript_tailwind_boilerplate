import dynamic from 'next/dynamic';

// 动态导入客户端组件
const HelloClient = dynamic(() => import('./HelloServer'), { ssr: false });

const HelloPage = () => {
    return <HelloClient />;
};

export default HelloPage;
