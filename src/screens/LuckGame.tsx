import { Alert, Button, StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native'
import React, { useState } from 'react'

const LuckGame:React.FunctionComponent = () => {
  const [firstNum, setFirstNum] = useState<number>(0);  
  const [secNum, setSecNum] = useState<number>(0);  
  const [thirdNum, setThirdNum] = useState<number>(0);  
  
  const [playerOneName, setPlayerOneName] = useState<string>("isimsiz1");
  const [playerTwoName, setPlayerTwoName] = useState<string>("isimsiz2");
  const [showNameInput, setShowNameInput] = useState<boolean>(false);
  const [hakPlayer1, setHakPlayer1] = useState<number>(5);  
  const [hakPlayer2, setHakPlayer2] = useState<number>(5);  
  const [totalPoint1, setTotalPoint1] = useState<number>(0);
  const [totalPoint2, setTotalPoint2] = useState<number>(0);
  const [sıra, setSıra] = useState<number>(1);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showp1Point5, setShowp1Point5] = useState<boolean>(false);
  const [showp1Point10, setShowp1Point10] = useState<boolean>(false);
  const [showp2Point5, setShowp2Point5] = useState<boolean>(false);
  const [showp2Point10, setShowp2Point10] = useState<boolean>(false);

  const handlePress = () => {
    setIsLoading(false);
    setShowp1Point5(false);
    setShowp1Point10(false),
    setShowp2Point5(false);
    setShowp2Point10(false);
    if(sıra === 1 && hakPlayer1 > 0 && hakPlayer2 > 0) {
        

        const generateNumber = () => Math.floor(Math.random() * 6);
        const newFirstNum = generateNumber();
        const newSecNum = generateNumber();
        const newThirdNum = generateNumber();

        setFirstNum(newFirstNum);
        setSecNum(newSecNum);
        setThirdNum(newThirdNum);
        
        setTimeout(() => {
            setIsLoading(true);
      
            if (newFirstNum === newSecNum && newFirstNum === newThirdNum && newThirdNum === newSecNum) {
              // Alert.alert("Tebrikler", `${playerOneName} 10 puan kazandın!`);
              setTotalPoint1(totalPoint1 + 10);
              setShowp1Point10(true)
              setTimeout(() => setShowp1Point10(false), 1000)
            } else if (newFirstNum === newSecNum || newThirdNum === newFirstNum || newSecNum === newThirdNum) {
              // Alert.alert("Fena değil!", `${playerOneName} 5 puan kazandın!`);
              setTotalPoint1(totalPoint1 + 5);
              setShowp1Point5(true)
              setTimeout(() => setShowp1Point5(false), 1000)
            };
          }, 1000);
          setSıra(sıra + 1);
        setHakPlayer1(hakPlayer1 - 1);
    }else if(sıra === 2){
        

        const generateNumber = () => Math.floor(Math.random() * 6);
        const newFirstNum = generateNumber();
        const newSecNum = generateNumber();
        const newThirdNum = generateNumber();

        setFirstNum(newFirstNum);
        setSecNum(newSecNum);
        setThirdNum(newThirdNum);

        setTimeout(() => {
            setIsLoading(true);
        if(newFirstNum === newSecNum && newFirstNum === newThirdNum && newThirdNum === newSecNum){
            // Alert.alert("Tebrikler", `${playerTwoName} 10 puan kazandın!`);
            setTotalPoint2(totalPoint2 + 10);
            setShowp2Point10(true)
            setTimeout(() => setShowp2Point10(false), 1000)
        } else if(newFirstNum === newSecNum || newThirdNum === newFirstNum || newSecNum === newThirdNum) {
            // Alert.alert("Fena değil!", `${playerTwoName} 5 puan kazandın!`);
            setTotalPoint2(totalPoint2 + 5);
            setShowp2Point5(true)
            setTimeout(() => setShowp2Point5(false), 1000)
        };
    }, 1000);
    setSıra(sıra - 1);
    setHakPlayer2(hakPlayer2 - 1)
    }

    if(hakPlayer1 === 0 && hakPlayer2 === 0) {

        setSıra(1);
        setHakPlayer1(5);
        setHakPlayer2(5);
        setTotalPoint1(0);
        setTotalPoint2(0);
        if(totalPoint1 > totalPoint2){
            Alert.alert(`${playerOneName} Kazandı!`, "Tebrikler! Yeni Oyuna Başlayın!")
        }else if(totalPoint2 > totalPoint1){
            Alert.alert(`${playerTwoName} Kazandı!`, "Tebrikler! Yeni Oyuna Başlayın!")
        }else {
            Alert.alert("Berabere!", "Yeni Oyuna Başlayın!")
        };
   
    }
   
  };

  const handleReset = () => {
    Alert.alert("Oyun Baştan Başladı!", "Bol Şanslar!");
    setHakPlayer1(5);
    setHakPlayer2(5);
    setTotalPoint1(0);
    setTotalPoint2(0);
    setSıra(1);
  };

  return (
    <View style={styles.container}>

        <View style={styles.totalContainer}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>SCORE BOARD</Text>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreItem}>
                     <Text style={[styles.totalText, sıra === 1 ? {borderWidth: 3, color: 'white', borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, borderColor: 'white'} : {color: "white"}]}>{playerOneName}</Text>
                     {
                            showp1Point5 && <Text style={styles.plusText}>Fena Değil!</Text>
                        }

                        {
                            showp1Point10 && <Text style={styles.plusText}>Tebrikler!</Text>
                        }
                     <View style={styles.score}>
                        <Text style={styles.scoreText}>{
                        totalPoint1}   
                        </Text>
                        {
                            showp1Point5 && <Text style={styles.plusText}>+5</Text>
                        }

                        {
                            showp1Point10 && <Text style={styles.plusText}>+10</Text>
                        }
                     </View>
                     <View style={styles.health}>
                        <Text style={styles.healthText}>
                            {
                                hakPlayer1 === 5 
                                ? 'XXXXX'
                                : hakPlayer1 === 4
                                ? 'XXXX'
                                : hakPlayer1 === 3
                                ? 'XXX'
                                : hakPlayer1 === 2
                                ? 'XX'
                                : hakPlayer1 === 1
                                ? 'X'
                                : ''
                            }
                        </Text>
                     </View>
                </View>

                <View style={styles.scoreItem}>
                     <Text style={[styles.totalText, sıra === 2 ? {borderWidth: 3, color: 'white', borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, borderColor: 'white'} : {color: "white"}]}>{playerTwoName}</Text>
                     {
                            showp2Point5 && <Text style={styles.plusText}>Fena Değil!</Text>
                        }

                        {
                            showp2Point10 && <Text style={styles.plusText}>Tebrikler!</Text>
                        }
                     <View style={styles.score}>
                        <Text style={styles.scoreText}>{totalPoint2}</Text>
                        {
                            showp2Point5 && <Text style={styles.plusText}>+5</Text>
                        }

                        {
                            showp2Point10 && <Text style={styles.plusText}>+10</Text>
                        }
                     </View>
                     <View style={styles.health}>
                        <Text style={styles.healthText}>
                            {
                                hakPlayer2 === 5 
                                ? 'XXXXX'
                                : hakPlayer2 === 4
                                ? 'XXXX'
                                : hakPlayer2 === 3
                                ? 'XXX'
                                : hakPlayer2 === 2
                                ? 'XX'
                                : hakPlayer2 === 1
                                ? 'X'
                                : ''
                            }
                        </Text>
                     </View>
                </View>
            </View>
            <View style={styles.siraContainer}>
                <Text style={styles.siraText}>Sıra sende: {sıra === 1 ? playerOneName : playerTwoName}</Text>
            </View>
        </View>
        
        <View style={styles.innerContainer}>
            
            {isLoading ? (
            <View style={styles.numbersContainer}>
                <View style={styles.pointContainer}>
                <Text style={[styles.text, firstNum === secNum ? {color: "green"} : firstNum === thirdNum ? {color: "green"} : {}]}>{firstNum}</Text>
                </View>  
                <View style={styles.pointContainer}>
                <Text style={[styles.text, secNum === firstNum ? {color: "green"} : secNum === thirdNum ? {color: "green"} : {}]}>{secNum}</Text>
                </View>  
                <View style={styles.pointContainer}>
                <Text style={[styles.text, thirdNum === firstNum ? {color: "green"} : thirdNum === secNum ? {color: "green"} : {}]}>{thirdNum}</Text>
                </View>  
            </View>
            ): <ActivityIndicator size={"large"}/>}
            <View style={styles.btnContainer}>
                <Pressable style={[styles.btn]} onPress={handlePress}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>{hakPlayer1 === 0 && hakPlayer2 === 0 ? "Sonucu Gör!" : "Başlat!"}</Text>
                </Pressable>
                <Pressable style={[styles.btn]} onPress={handleReset}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>Sıfırla</Text>
                </Pressable>
            </View>
        </View>
        
       
        
        {/* <View style={styles.totalContainer}>
            <Text style={[styles.totalText, sıra === 1 ? {color: "green"} : {color: "black"}]}>Oyuncu 1: {playerOneName}</Text>
            <Text style={[styles.totalText , sıra === 2 ? {color: "green"} : {color: "black"}]}>Oyuncu 2: {playerTwoName}</Text>
            {
                showNameInput && (
                <>
                <TextInput value={playerOneName} onChangeText={setPlayerOneName}/>
                <TextInput value={playerTwoName} onChangeText={setPlayerTwoName}/>
                <Button title='Kaydet' onPress={() => setShowNameInput(false)}/>
                </>  
                )  
            }
            <Button title='İsmi Değiştir' onPress={() => setShowNameInput(!showNameInput)}/>
            <Text style={styles.totalText}>Kalan Hak {playerOneName}: {hakPlayer1}</Text>
            <Text style={styles.totalText}>Kalan Hak {playerTwoName}: {hakPlayer2}</Text>
        </View>
        <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Toplam Puan {playerOneName}: {totalPoint1}</Text>
            <Text style={styles.totalText}>Toplam Puan {playerTwoName}: {totalPoint2}</Text>
        </View> */}
       
        
      
    </View>
  )
};

export default LuckGame;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%'
    },

    innerContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        gap: 20,
        flex: 1,
    },

    numbersContainer: {
        flexDirection: 'row',
        gap: 30,
    },

    text: {
        fontSize: 40,
        fontWeight: "bold"
    },

    pointContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        padding: 10,
        height: 70,
        borderRadius: 12,
        backgroundColor: 'white'
    },

    totalContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: '100%'
    },

    totalText: {
        fontSize: 25,
    },

    siraContainer: {
        alignItems: "center",
    },

    siraText: {
        color: "red",
        fontSize: 20,
    },

    btnContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
        marginBottom: 30,
    },

    btn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#db7b7b',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
    },

    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        width: '100%',
        paddingVertical:30,
    },

    scoreItem: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },

    score: {
        backgroundColor: 'white',
        borderWidth: 3,
        width: 70,
        height: 70,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    scoreText: {
        fontSize: 30
    },

    health: {

    },

    healthText: {
        fontSize: 20,
        color: 'white'
    },

    plusText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
});
