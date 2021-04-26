GS.dataCache['A3AAD4EE147DE041C33AC35744876DDF8398'] = {
    "uid": "A3AAD4EE147DE041C33AC35744876DDF8398",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Meet Annie",
        "type": "vn.scene",
        "parentId": "E55A412405E0974BD929AA400DC8BAACFB49",
        "chapterUid": "02E7B13917F7454FDF78F48668AF4FD24DFF",
        "order": 0,
        "localizableStrings": {
            "8D97F47D66B4A940294AB76741DD7F600D78": {
                "t": "You...I-i...hhn....",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "D521F2D54FA0364A6D8B25403658275B721E"
                }
            },
            "91B42B3746EC514696096086A67806A14E64": {
                "t": "So I'm dead? Seriously dead? ",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "111B6CD00C15C641EB48F09977642468136F"
                }
            },
            "8E64CCD73C3652430E2AB184B6620B6305C8": {
                "t": "She sniffs loudly, her eyes red and her shoulders tense and raised.",
                "d": {
                    "cid": 0,
                    "eid": "3BACA2903E0C85497B78D7B5346FEE16B860"
                }
            },
            "E1F3A3CD180094417318991674CE70FE0F83": {
                "t": "I can't believe...I worked so hard and I just died like that...",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "4E2CE4F682DD6742D11AE7764E3467016316"
                }
            },
            "1D8421613B3A0148917BFF77108EBD7030D6": {
                "t": "I thought...I thought if I worked hard, an-and...sniff...I was in the middle of writing my thesis and I...",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "EFCFD2B938EA30480C7988B3E2CC73F8E024"
                }
            },
            "39601EAC78567146842B2A919EDF6AB0696D": {
                "t": "I thought that going out just once, having a good time or something...I can't believe this.",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "349FB61E800C974E556A6E32D1025240BE9A"
                }
            },
            "B865C3931F1D814C18381BC895C5C3252F4B": {
                "t": "....Calm down? I-I'm dead! What the hell do you mean calm down?! ",
                "d": {
                    "cid": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "eid": "DD7C252A4FF7B5464A0B62240081950A52F0"
                }
            },
            "710840E13231E145BA183148FF161524C969": {
                "t": "\"What do you mean?\"",
                "d": {
                    "eid": "FFECF85284D0F846EA388A4254B862EA973E"
                }
            },
            "E448E49489AF7143A14AE12559D16A6D04D7": {
                "t": "\"Please calm down.\"",
                "d": {
                    "eid": "452B07F67025F44007586C600D762C12624A"
                }
            },
            "CEC7052E4EE0934A00495AD4324C943F3186": {
                "t": "That's the ship. When you gently begin to steer her towards the end of the pier, where the ship waits, she doesn't flinch away. ",
                "d": {
                    "cid": 0,
                    "eid": "7A9DFBF314880549347BE7B6F33DD331E41E"
                }
            },
            "6E1311C75934154629390B13915B63C561F6": {
                "t": "That's the ship. Might be a good idea to leave Annie alone for now.",
                "d": {
                    "cid": 0,
                    "eid": "837CF8DF6B25B24EC7386740E0524E250427"
                }
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "docks",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "55BBEEAA7F16A14C135B0448CF13CCA0D7E1",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "music": {
                        "name": "Annie",
                        "volume": "50",
                        "playbackRate": 100
                    },
                    "fadeInDuration": 90,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "fieldFlags": {
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "82F923244917484F568B9018B10E82AEA772",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": null,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "EDECDA8116B6E645F34A03F41606FE29F312",
                "indent": 0
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "expressionId": "96FBD47A68E41141C72AA389B1D7DF6A9381",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "366B39ED2D05484EA18A606765F6761F7492",
                "indent": 0
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "predefinedPositionId": 5,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "uid": "3369C5FA2A981743D6398F385B72BF5CA0FC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 90,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "1EAAE3742C9C73415D3AE465A56EB610A858",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8D97F47D66B4A940294AB76741DD7F600D78",
                        "defaultText": "You...I-i...hhn...."
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D521F2D54FA0364A6D8B25403658275B721E",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "40A9F23A75AA5248289941620F37AFBB9026",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "91B42B3746EC514696096086A67806A14E64",
                        "defaultText": "So I'm dead? Seriously dead? "
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "111B6CD00C15C641EB48F09977642468136F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8E64CCD73C3652430E2AB184B6620B6305C8",
                        "defaultText": "She sniffs loudly, her eyes red and her shoulders tense and raised."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3BACA2903E0C85497B78D7B5346FEE16B860",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "E1F3A3CD180094417318991674CE70FE0F83",
                        "defaultText": "I can't believe...I worked so hard and I just died like that..."
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4E2CE4F682DD6742D11AE7764E3467016316",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "whatdoyoumean"
                },
                "uid": "D681F1547752214F1E4B84E123E59D63FBF7",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "whatmean",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "710840E13231E145BA183148FF161524C969",
                        "defaultText": "\"What do you mean?\""
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "FFECF85284D0F846EA388A4254B862EA973E",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "calmdown",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "E448E49489AF7143A14AE12559D16A6D04D7",
                        "defaultText": "\"Please calm down.\""
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "452B07F67025F44007586C600D762C12624A",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "A6857576289CC549EB4918344D3A664D5F3C",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "whatmean"
                },
                "uid": "43FDC58357AB604E5F598516532EF58905D5",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "1D8421613B3A0148917BFF77108EBD7030D6",
                        "defaultText": "I thought...I thought if I worked hard, an-and...sniff...I was in the middle of writing my thesis and I..."
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EFCFD2B938EA30480C7988B3E2CC73F8E024",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "39601EAC78567146842B2A919EDF6AB0696D",
                        "defaultText": "I thought that going out just once, having a good time or something...I can't believe this."
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "349FB61E800C974E556A6E32D1025240BE9A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "AD3B5FB87759B2465569520753D4065B2705",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "13320E3C4F52B048E859F3F9A8C0036AD8DB",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "CEC7052E4EE0934A00495AD4324C943F3186",
                        "defaultText": "That's the ship. When you gently begin to steer her towards the end of the pier, where the ship waits, she doesn't flinch away. "
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7A9DFBF314880549347BE7B6F33DD331E41E",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "823B69254290314FA34A6F526709270D37F8",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4F24647A00F6994BA7299BF8E1A337E1DC98",
                        "name": "The Ship of Theseus?"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "BEDC8E2E84C5214D7F6A4D22DE3F00178340",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "calmdown"
                },
                "uid": "49E74EC311F57149DA4B86D2F53888F571A8",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B865C3931F1D814C18381BC895C5C3252F4B",
                        "defaultText": "....Calm down? I-I'm dead! What the hell do you mean calm down?! "
                    },
                    "position": 0,
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "DD7C252A4FF7B5464A0B62240081950A52F0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "AD3B5FB87759B2465569520753D4065B2705",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "D094869A11E6E144123943A40A31687F8154",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6E1311C75934154629390B13915B63C561F6",
                        "defaultText": "That's the ship. Might be a good idea to leave Annie alone for now."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "837CF8DF6B25B24EC7386740E0524E250427",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "B1EB2C0C1EC773440A4B15124BF8D4604278",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4F24647A00F6994BA7299BF8E1A337E1DC98",
                        "name": "The Ship of Theseus?"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E13930F03833A54878480FC7AD2743A23D10",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}