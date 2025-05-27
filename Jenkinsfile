pipeline {
    agent any
    environment {
        PROJECT_DIR = "C:\\JAVA Lab\\DO_Practical4\\Q3\\JSP_Practical4Q3"
        TOMCAT_WEBAPPS = "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps"
    }
    stages {
        stage('Fetch JSP Application') {
            steps {
                echo "Fetching JSP application from ${env.PROJECT_DIR}\\WebContent"
                // Verify the WebContent directory and index.jsp exist
                bat "dir \"${env.PROJECT_DIR}\\WebContent\""
            }
        }
        stage('Deploy to Tomcat') {
            steps {
                echo "Deploying JSP application to Tomcat..."
                bat "mkdir \"${env.TOMCAT_WEBAPPS}\\JSP_Practical4Q3\" 2>nul || echo Directory already exists"
                bat "xcopy \"${env.PROJECT_DIR}\\WebContent\\index.jsp\" \"${env.TOMCAT_WEBAPPS}\\JSP_Practical4Q3\\\" /Y /D"
            }
        }
        stage('Verify Deployment') {
            steps {
                echo "Verifying the application is accessible..."
                bat "echo Visit http://localhost:8080/JSP_Practical4Q3/index.jsp to verify"
            }
        }
    }
    post {
        success {
            echo "Pipeline completed successfully! JSP application deployed."
        }
        failure {
            echo "Pipeline failed! Check the logs for details."
        }
    }
}
