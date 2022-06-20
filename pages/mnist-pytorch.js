import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MINSTPytorch() {
    return (
        <Layout>
            <div className="row" id="main">
                <div className="col" id="content">
                    <h1>基于 PyTorch 的手写体数字识别</h1>
                    <div className="content">
                        <a href="https://github.com/zenpk/HandwrittenDigitsRecognition-PyTorch">
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp;&nbsp;源代码及文档&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </a>
                        <div className="hr"></div>
                    </div>
                    <h2 id="about">简介</h2>
                    <div className="content">
                        本项目基于 PyTorch，使用 MNIST 数据库，训练了一个手写体数字识别神经网络。经过 10 轮迭代可以达到 95% 的识别正确率
                    </div>
                    <h2 id="modelTraining">模型训练</h2>
                    <h3 id="hyperparameters">超参量</h3>
                    <table className="table table-m">
                        <thead></thead>
                        <tbody>
                            <tr className="table-secondary">
                                <th>
                                    迭代次数
                                </th>
                                <td>
                                    10
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    学习率
                                </th>
                                <td>
                                    0.01
                                </td>
                            </tr>
                            <tr className="table-secondary">
                                <th>
                                    隐藏结点数
                                </th>
                                <td>
                                    64
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    分批方式
                                </th>
                                <td>
                                    共有训练样本 60,000 个，分为 1875 组，每组 32 个
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="neuralNetwork">神经网络结构</h3>
                    <div className="content">
                        由于输入图像为像素数 28 * 28 = 784 的灰度图像，因此输入层有 784 个结点
                        <br />
                        输入层经过 ReLU 激活函数后传入隐藏层，隐藏层包含 64 个结点
                        <br />
                        {'再次经过 ReLU 激活函数后传入输出层，输出层包含 10 个结点，分别代表 "0~9"'}
                    </div>
                    <div className="content">
                        <img className="image-center"
                            src="/mnist-pytorch/diagram.jpg"
                            alt="diagram"
                        />
                    </div>
                    <div className="content">
                        采用的迭代方法为随机梯度下降算法 (SGD)
                    </div>
                    <h3 id="results">训练结果</h3>
                    <div className="content">
                        经过 10 轮迭代，最终的平均训练 loss 值为 0.16
                    </div>
                    <div className="content image-center">
                        <img className="image-50"
                            src="/mnist-pytorch/training.png"
                            alt="training"
                        />
                        <br />
                        <img className="image-50"
                            src="/mnist-pytorch/loss-graph.png"
                            alt="lossGraph"
                        />
                        <br />
                        loss 曲线
                    </div>
                    <h2 id="testing">样本测试</h2>
                    <div className="content">
                        <h3 id="noiseless">无噪声测试</h3>
                        MNIST 数据库在提供 60,000 训练样本的基础上，还提供了 10,000 个测试样本，测试结果如下
                    </div>
                    <div className="content image-center">
                        <img className="image-80"
                            src="/mnist-pytorch/noiseless-testing.png"
                            alt="noiselessTesting"
                        />
                        <br />
                        无噪声测试结果
                    </div>
                    <div className="content">
                        可以看出在无噪声的条件下，模型对数字的识别率较高，为 94%
                    </div>
                    <h3 id="gaussian">加入高斯噪声测试</h3>
                    <div className="content">
                        本项目在对原测试样本测试后，还尝试了加入高斯噪声检测模型对含噪声图片的识别率
                        <br />
                        识别准确率与高斯噪声方差关系如下
                    </div>
                    <div className="content image-center">
                        <img className="image-50"
                            src="/mnist-pytorch/noise-testing.png"
                            alt="gaussianNoiseAdded"
                        />
                        <br />
                        识别准确率与高斯噪声方差关系图像</div>
                    <h3 id="customTesting">自行创建测试样本</h3>
                    <div className="content">
                        可以自行绘制 28*28 的灰度图，并加噪进行测试，测试结果如下
                    </div>
                    <div className="content image-center">
                        <img className="image-80"
                            src="/mnist-pytorch/custom-testing.png"
                            alt="customTesting"
                        />
                        <br />
                        自创样本测试
                    </div>
                </div>
            </div>
        </Layout >
    );
}