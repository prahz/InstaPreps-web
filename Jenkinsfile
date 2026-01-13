pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('Node-12.10.0'){
                    sh 'npm install'
                }                 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying to staging server"
                sshagent(['intaprepsweb']) {                                    
                     sh "scp -r -o StrictHostKeyChecking=no /var/lib/jenkins/workspace/Intapreps_Web_develop/* ubuntu@13.233.76.103:/home/ubuntu/intaprepsweb/"             
                }
            }
        }
    }
}
