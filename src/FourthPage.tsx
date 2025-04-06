import './FourPage.css';
import liberty from './assets/liberty.jpg';
import lv from './assets/lv.jpg';
import puc from './assets/puc-chile.png';
import abcdin from './assets/abcdin.jpg';

const FourthPage = () => {
    const companies = [
        {
            src: liberty,
            title: "Senior Data Solutions Analyst",
            subtitle: "Liberty Seguros Andes",
            description: (
                <ul>
                    <li>Optimized migration strategies for cloud infrastructure between tenants, ensuring secure and cost-effective solutions.</li>
                    <li>Orchestrated resilient cloud architectures handling 10M+ transactions per day on AWS, optimizing performance and scalability.</li>
                    <li>Streamlined ETL pipelines and Lambda functions to reduce data processing time by 30%.</li>
                    <li>Developed and maintained conceptual, logical, and physical data models.</li>
                    <li>Ensured data consistency, quality, and accuracy across enterprise systems.</li>
                </ul>
            ),
        },
        {
            src: lv,
            title: "Data Engineer",
            subtitle: "LarrainVial",
            description: (
                <ul>
                    <li>Engineered robust ETL processes using SSIS packages in Microsoft Visual Studio with C# and SQL, integrating data across 3+ systems and reducing processing time by 25%, enabling faster decision-making.</li>
                    <li>Collaborate with ETL developers and data engineers, leading to the successful implementation of 5+ data integration strategies, improving data accuracy by 30%.</li>
                    <li>Partnered with stakeholders to gather and translate business requirements into 5+ technical solutions, directly supporting key business initiatives and improving project delivery timelines by 20%.</li>
                </ul>
            ),
        },
        {
            src: puc,
            title: "Business Intelligence Analyst",
            subtitle: "Pontificia Universidad Catolica de Chile",
            description: (
                <ul>
                    <li>Designed and implemented advanced data models that fulfilled both business and technical requirements, enabling data-driven decision-making across multiple departments.</li>
                    <li>Developed a scalable data warehouse solution using Apache Spark on Microsoft Azure and Databricks, supporting the integration of 20+ datasets and improving data accessibility by 40%.</li>
                    <li>Optimized data processing workflows through the utilization of Scala & Spark SQL in Medallion Architecture, achieving a 30% reduction in processing time and enhancing system efficiency.</li>
                    <li>Streamlined data analysis and reporting capabilities, providing actionable insights that contributed to a 25% improvement in operational decision-making.</li>  
                </ul>
            ),
        },
        {
            src: abcdin,
            title: "Data Analyst",
            subtitle: "ABCDIN",
            description: (
                <ul>
                    <li>Performed comprehensive data analyses using SQL Server Management Studio, uncovering trends and actionable insights that contributed to a 20% improvement in strategic decision-making.</li>
                    <li>Designed and maintained dynamic Power BI reports, effectively visualizing data and presenting key findings to stakeholders, resulting in a 30% increase in report usage and adoption across teams.</li>
                </ul>
            ),
        },
    ];
    

    return (
        <div className='FourthPage'>
            <h1>Experience</h1>
            <p>A journey of learning across different places, where knowledge and experience have shaped my path.</p>
            {companies.map((company, index) => (
                <div key={index} className="company-item">
                    <img
                        src={company.src}
                        alt={`${company.title} logo`}
                        className="company-image"
                    />
                    <div className="text-content">
                        <h2>{company.title}</h2>
                        <h3>{company.subtitle}</h3>
                        <p>{company.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FourthPage;
