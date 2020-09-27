import React from 'react';
import {View, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, ButtonContainer} from '../../components/Button';
import {Alert} from '../../components/Alert';

class Quiz extends React.Component {
  questions = [
    {
      question: "What is localhost's IP address?",
      answers: [
        {id: '1', text: '192.168.1.1'},
        {id: '2', text: '127.0.0.1', correct: true},
        {id: '3', text: '209.85.231.104'},
        {id: '4', text: '66.220.149.25'},
      ],
    },
    {
      question: 'What kind of fruit was used to name a computer in 1984?',
      answers: [
        {id: '1', text: 'Blackberry'},
        {id: '2', text: 'Blueberry'},
        {id: '3', text: 'Pear'},
        {id: '4', text: 'Apple', correct: true},
      ],
    },
  ];

  state = {
    correctCount: 0,
    totalCount: this.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = {answered: true};

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      },
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        return this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    const questions = this.questions;
    const question = questions[this.state.activeQuestionIndex];
    const {navigation} = this.props;
    return (
      <View style={[styles.container, {backgroundColor: 'blue'}]}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Quiz {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});
