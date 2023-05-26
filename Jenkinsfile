pipeline {
        agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Clone') {
            steps {
               git branch: 'main', url: 'https://github.com/Iman-khayat/WEB-DEVOPS.git'
            }
        }
        stage('Build') {
            steps {
                sh'''
                docker build -t nodeimage .
                '''
            }
        }
        stage('Test') {
            steps {
                sh'''
                docker run -it nodeimage
                curl localhost:3000
                '''
                }
        }
        stage('Package'){
            steps{
            sh'''
            docker push webdevops/nodeimage
            '''
            }
    }
        stage('Deploy'){
            steps{
                sh'''
                echo "task is completed"
                '''
            }
        }
}
        }
