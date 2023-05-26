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
       
        stage('Excute') {
            steps {
                sh'''
                docker run --name mycontainer -d -i -t alpine /bin/sh :${BUILD_NUMBER}
                curl localhost:3000
                '''
                }
        }
        stage('Package'){
            steps{
            sh'''
            docker push webdevops/nodeimage :${BUILD_NUMBER}
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
